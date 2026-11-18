import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native'

import {
  Bookmark,
  Heart,
  MessageCircle,
  Send
} from 'lucide-react-native'

const stories = [
    {
        username: 'your_story',
        image: 'https://i.pravatar.cc/150?img=12'
    },
    {
        username: 'sophia',
        image: 'https://i.pravatar.cc/150?img=47'
    },
    {
        username: 'james',
        image: 'https://i.pravatar.cc/150?img=13'
    },
    {
        username: 'olivia',
        image: 'https://i.pravatar.cc/150?img=44'
    },
    {
        username: 'noah',
        image: 'https://i.pravatar.cc/150?img=15'
    },
]

const posts = [
    {
        username: 'sophia',
        profile: 'https://i.pravatar.cc/150?img=47',
        image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800',
        caption: 'Somewhere between dreams and reality. ✨',
        likes: '1,204 likes'
    },
    {
        username: 'james',
        profile: 'https://i.pravatar.cc/150?img=13',
        image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800',
        caption: 'A little escape from the busy world. 🌿',
        likes: '856 likes'
    },
    {
        username: 'olivia',
        profile: 'https://i.pravatar.cc/150?img=44',
        image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
        caption: 'Finding beauty in the little things. 🌸',
        likes: '2,031 likes'
    }
]

export default function Home() {
    return (
        <ScrollView className="flex-1 bg-white">

            <View className="w-full max-w-md self-center">

                {/* Header */}
                <View className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100">

                    <Text className="text-3xl font-extrabold text-blue-600">
                        moments.
                    </Text>

                    <View className="flex-row gap-5">
                        <Heart size={25} color="black" />
                        <Send size={25} color="black" />
                    </View>

                </View>

                {/* Stories */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="border-b border-gray-100 py-4"
                >

                    {stories.map((story, index) => (
                        <View
                            key={index}
                            className="items-center mx-3"
                        >

                            <View className="h-16 w-16 rounded-full border-2 border-blue-500 p-1">

                                <Image
                                    source={{ uri: story.image }}
                                    className="h-full w-full rounded-full"
                                />

                            </View>

                            <Text className="text-xs text-gray-700 mt-2">
                                {story.username}
                            </Text>

                        </View>
                    ))}

                </ScrollView>

                {/* Posts */}
                {posts.map((post, index) => (
                    <View key={index} className="mb-6">

                        {/* Post Header */}
                        <View className="flex-row items-center px-4 py-3">

                            <Image
                                source={{ uri: post.profile }}
                                className="h-10 w-10 rounded-full"
                            />

                            <Text className="font-bold text-sm ml-3">
                                {post.username}
                            </Text>

                        </View>

                        {/* Post Image */}
                        <Image
                            source={{ uri: post.image }}
                            className="w-full aspect-square"
                            resizeMode="cover"
                        />

                        {/* Post Icons */}
                        <View className="flex-row items-center justify-between px-4 py-3">

                            <View className="flex-row items-center gap-4">

                                <Heart size={25} color="black" />

                                <MessageCircle size={25} color="black" />

                                <Send size={25} color="black" />

                            </View>

                            <Bookmark size={25} color="black" />

                        </View>

                        {/* Caption */}
                        <View className="px-4">

                            <Text className="font-bold text-sm">
                                {post.likes}
                            </Text>

                            <Text className="text-sm mt-1">
                                <Text className="font-bold">
                                    {post.username}{' '}
                                </Text>

                                {post.caption}
                            </Text>

                            <Text className="text-xs text-gray-400 mt-2">
                                View all comments
                            </Text>

                        </View>

                    </View>
                ))}

            </View>

        </ScrollView>
    )
}