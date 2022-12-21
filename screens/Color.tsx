const TypeColor = (type : string) => {

   if(type == "grass"){
    return "#A7DB8D"; 
   } else {
    return "#A8A878";
   }
  
      // switch (type) {
      //   case "grass":          return "#A7DB8D";   break;
      //   case "fire":           return "#F08030";   break;
      //   case "water":          return "#6890F0";   break;
      //   case "bug":            return "#88950C";   break;
      //   case "dark":           return "#7C7D81";   break;
      //   case "dragon":         return "#7662E0";   break;
      //   case "electric":       return "#FAE078";   break;
      //   case "fairy":          return "#FFB8CC";   break;
      //   case "fighting":       return "#C03028";   break;
      //   case "flying":         return "#C6B7F5";   break;
      //   case "ghost":          return "##A292BC";   break;
      //   case "ground":         return "#BCE6E6";   break;
      //   case "ice":            return "#A040A0";   break;
      //   case "psycic":         return "#FA92B2";   break;
      //   case "rock":           return "#B39E51";   break;
      //   case "steel":          return "#B8B9C6";   break;
      //   default:               return "#A8A878";
  // }
}

export default TypeColor;