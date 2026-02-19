import ShimmerPlaceholder, {
  ShimmerPlaceholderProps,
} from "react-native-shimmer-placeholder";
import LinearGradient, {
  LinearGradientProps,
} from "react-native-linear-gradient";
import { View } from "react-native";
const shimmerCard = () => {
  return (
    <View>
      <ShimmerPlaceholder LinearGradient={LinearGradient} />
    </View>
  );
};
export default shimmerCard;
