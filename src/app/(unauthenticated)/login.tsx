import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Login() {
    return (
        <View className="flex-1 bg-white justify-center px-6">

            {/* App Name */}
            <View className="items-center mb-12">
                <Text className="text-4xl font-extrabold text-blue-600">
                    moments.
                </Text>

                <Text className="text-gray-500 mt-2">
                    Share your moments with the world.
                </Text>
            </View>

            {/* Welcome Heading */}
            <View className="mb-8">
                <Text className="text-3xl font-bold text-gray-900">
                    Welcome Back!
                </Text>

                <Text className="text-gray-500 mt-2">
                    Login to continue your journey.
                </Text>
            </View>

            {/* Input Fields */}
            <View className="gap-5">
                <Input
                    label="Email Address"
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Input
                    label="Password"
                    placeholder="Enter your password"
                    secureTextEntry={true}
                />

               {/* Login Button */}
                    <View className="mt-3">
                     <Button label="Login" />
                    </View>
            </View>

            {/* Register Link */}
            <View className="flex-row justify-center mt-8">
                <Text className="text-gray-500">
                    Don't have an account? 
                </Text>

                <TouchableOpacity
                    onPress={() => router.push('/register')}
                >
                    <Text className="text-blue-600 font-bold ml-1">
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}