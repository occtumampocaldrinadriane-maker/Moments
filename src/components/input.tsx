import { Text, TextInput, TextInputProps, View } from 'react-native'

interface InputProps extends TextInputProps {
    label: string
}

export default function Input({ label, ...props }: InputProps) {
    return (
        <View className="gap-2">
            <Text className="text-sm font-semibold text-gray-700">
                {label}
            </Text>

            <TextInput
                className="h-14 rounded-xl border border-gray-300 bg-gray-50 px-4 text-base text-gray-900"
                placeholderTextColor="#9CA3AF"
                {...props}
            />
        </View>
    )
}