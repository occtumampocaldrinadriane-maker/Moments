import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const photos = [
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=500',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500',
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500',
]

export default function Profile() {
    return (
        <ScrollView className="flex-1 bg-white">

            <View className="w-full max-w-md self-center">

                {/* Header */}
                <View className="px-5 py-4 border-b border-gray-100">
                    <Text className="text-2xl font-extrabold text-blue-600">
                        moments.
                    </Text>
                </View>

                {/* Profile Information */}
                <View className="px-5 pt-6">

                    <View className="flex-row items-center">

                        <Image
                            source={{
                                uri: 'https://i.pravatar.cc/300?img=12'
                            }}
                            className="w-24 h-24 rounded-full"
                        />

                        <View className="flex-1 flex-row justify-around ml-5">

                            <View className="items-center">
                                <Text className="font-bold text-lg">12</Text>
                                <Text className="text-gray-500 text-xs">Posts</Text>
                            </View>

                            <View className="items-center">
                                <Text className="font-bold text-lg">1.2k</Text>
                                <Text className="text-gray-500 text-xs">Followers</Text>
                            </View>

                            <View className="items-center">
                                <Text className="font-bold text-lg">350</Text>
                                <Text className="text-gray-500 text-xs">Following</Text>
                            </View>

                        </View>

                    </View>

                    {/* Name and Bio */}
                    <View className="mt-4">

                        <Text className="font-bold text-base">
                            Alex Morgan
                        </Text>

                        <Text className="text-gray-500 text-sm">
                            @alexmorgan
                        </Text>

                        <Text className="text-sm mt-2">
                            Collecting moments, not things. ✨
                        </Text>

                        <Text className="text-sm text-blue-600 mt-1">
                            www.moments.com
                        </Text>

                    </View>

                    {/* Edit Profile Button */}
                    <TouchableOpacity
                        className="mt-5 h-10 bg-gray-100 rounded-lg items-center justify-center"
                    >
                        <Text className="font-bold text-sm">
                            Edit Profile
                        </Text>
                    </TouchableOpacity>

                </View>

                {/* Posts Heading */}
                <View className="mt-7 border-t border-gray-200">

                    <Text className="text-center font-bold text-sm py-4">
                        POSTS
                    </Text>

                </View>

                {/* Photo Grid */}
                <View className="flex-row flex-wrap">

                    {photos.map((photo, index) => (
                        <Image
                            key={index}
                            source={{ uri: photo }}
                            className="w-1/3 aspect-square border border-white"
                            resizeMode="cover"
                        />
                    ))}

                </View>

            </View>

        </ScrollView>
    )
}