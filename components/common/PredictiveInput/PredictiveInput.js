import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Autocomplete from "react-native-autocomplete-input";

const comp = (a, b) => {
  return a.toLowerCase().trim() === b.toLowerCase().trim();
};

const findData = (query, data) => {
  if (query === "") {
    return [];
  }

  const regex = new RegExp(`${query.trim()}`, "i");
  return data.filter((item) => item.name.search(regex) >= 0);
};

const PredictiveInput = ({ data, placeHolder, onChange }) => {
  const [query, updateQuery] = useState("");
  const [clicked, updateClicked] = useState("");

  let exerciseData = clicked != query ? findData(query, data) : [];

  const onSelect = (name) => {
    onChange(name);
    updateQuery(name);
    updateClicked(name);
  };

  const onTextChange = (name) => {
    onChange(name);
    updateQuery(name);
    updateClicked("");
  };

  return (
    <View style={styles.container}>
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.autocompleteContainer}
        data={
          exerciseData.length === 1 && comp(query, exerciseData[0].name)
            ? []
            : exerciseData
        }
        value={query}
        onChangeText={onTextChange}
        placeholder={placeHolder}
        flatListProps={{
          keyExtractor: (item) => item.id + "",
          renderItem: ({ item, i }) => (
            <TouchableOpacity onPress={() => onSelect(item.name)}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemText: {
    padding: 16,
  },
});

export default PredictiveInput;
