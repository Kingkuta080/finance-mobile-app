import { View } from "react-native";
import ForgottenPassword from "./screens/auth/forgottenPassword";
  export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ForgottenPassword />
    </View>
  );
}
