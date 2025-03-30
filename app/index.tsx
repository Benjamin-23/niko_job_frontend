import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className=" flex-1 justify-center items-center">
      <View className="w-full px-8">
        <Text className="text-3xl font-bold mb-8 text-center">Welcome</Text>

        <View className="space-y-4 mb-6">
          <View className="space-y-2">
            <Text className="text-gray-600">Email</Text>
            <View className="bg-gray-100 rounded-lg px-4 py-3">
              <TextInput placeholder="Enter your email" className="w-full" />
            </View>
          </View>

          <View className="space-y-2">
            <Text className="text-gray-600">Password</Text>
            <View className="bg-gray-100 rounded-lg px-4 py-3">
              <TextInput
                placeholder="Enter your password"
                secureTextEntry
                className="w-full"
              />
            </View>
          </View>
        </View>

        <View className="space-y-4">
          <TouchableOpacity className="bg-blue-500 py-3 rounded-lg">
            <Text className="text-white text-center font-semibold">Login</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="text-blue-500 text-center">
              Don't have an account? Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
