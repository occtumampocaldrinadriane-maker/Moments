import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { router } from 'expo-router'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function Register() {
    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 w-full max-w-md self-center justify-center px-6 py-12">

                {/* App Name */}
                <View className="items-center mb-10">
                    <Text className="text-4xl font-extrabold text-blue-600">
                        moments.
                    </Text>

                    <Text className="text-gray-500 mt-2">
                        Share your moments with the world.
                    </Text>
                </View>

                {/* Heading */}
                <View className="mb-7">
                    <Text className="text-3xl font-bold text-gray-900">
                        Create Account
                    </Text>

                    <Text className="text-gray-500 mt-2">
                        Join Moments and start sharing.
                    </Text>
                </View>

                {/* Registration Fields */}
                <View className="gap-5">

                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                    />

                    <Input
                        label="Email Address"
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Input
                        label="Password"
                        placeholder="Create a password"
                        secureTextEntry={true}
                    />

                    <Input
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        secureTextEntry={true}
                    />

                    <View className="mt-3">
                        <Button label="Register" />
                    </View>

                </View>

                {/* Login Link */}
                <View className="flex-row justify-center mt-8">
                    <Text className="text-gray-500">
                        Already have an account?
                    </Text>

                    <TouchableOpacity
                        onPress={() => router.push('/login')}
                    >
                        <Text className="text-blue-600 font-bold ml-1">
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}