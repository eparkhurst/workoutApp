import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import Autocomplete from 'react-native-autocomplete-input';

const comp = (a, b) => {
  return a.toLowerCase().trim() === b.toLowerCase().trim();
};

const findData = (query, data) => {
  if (query === '') {
    return [];
  }

  const regex = new RegExp(`${query.trim()}`, 'i');
  return data.filter((item) => item.title.search(regex) >= 0);
};

const PredictiveInput = ({ data, placeHolder, onChange, onSubmit }) => {
  const [query, updateQuery] = useState('');
  const [clicked, updateClicked] = useState('');

  let exerciseData = clicked != query ? findData(query, data) : [];

  const onSelect = (item) => {
    onChange(item);
    updateQuery(item.title);
    updateClicked(item.title);
  };

  const onTextChange = (title) => {
    onChange({ title });
    updateQuery(title);
    updateClicked('');
  };

  const _onSubmit = (e) => {
    updateQuery('');
    updateClicked('');
    onSubmit(query);
  };

  return (
    <View style={styles.container}>
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        data={
          exerciseData.length === 1 && comp(query, exerciseData[0].title)
            ? []
            : exerciseData
        }
        value={query}
        onChangeText={onTextChange}
        placeholder={placeHolder}
        flatListProps={{
          keyExtractor: (item) => item.id + '',
          renderItem: ({ item, i }) => (
            <TouchableOpacity onPress={() => onSelect(item)}>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <IconButton icon="plus" color="blue" size={20} onPress={_onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  itemText: {
    padding: 16,
  },
});

export default PredictiveInput;
