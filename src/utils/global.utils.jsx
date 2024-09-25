import { StyleSheet } from "react-native";

export const extractUrlFromIntent = (intentString) => {
  const prefix = "intent://maps.app.goo.gl/?link=";
  const suffixIndex = intentString.indexOf("#Intent");

  if (intentString.startsWith(prefix) && suffixIndex !== -1) {
    return intentString.substring(prefix.length, suffixIndex);
  }

  return null; // Return null or handle the case where the URL cannot be extracted
};

// Function to determine color based on danger level
export const getDangerColor = (level) => {
  switch (level) {
    case 1:
      return "green";
    case 2:
      return "orange";
    case 3:
      return "red";
    default:
      return "gray";
  }
};

export const styles = StyleSheet.create({
  shadow: {
    elevation: 5, // Intensitas bayangan
    shadowColor: "#000", // Warna bayangan
    shadowOffset: { width: 0, height: 2 }, // Offset bayangan (horizontal, vertical)
    shadowOpacity: 0.2, // Tingkat transparansi bayangan
    shadowRadius: 2, // Lebar atau kabur bayangan
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#40513B'
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#40513B'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
