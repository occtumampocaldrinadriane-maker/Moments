import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface BtnProps extends TouchableOpacityProps {
    label: string
}

export default function Button({ label, ...props }: BtnProps) {
    return (
        <TouchableOpacity
            className="h-14 rounded-xl bg-blue-600 items-center justify-center"
            activeOpacity={0.8}
            {...props}
        >
            <Text className="text-white uppercase text-base font-bold">
                {label}
            </Text>
        </TouchableOpacity>
    )
}