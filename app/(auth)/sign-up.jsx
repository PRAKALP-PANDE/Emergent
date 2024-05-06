import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router';

const SignUp = () => {
  const [from, setFrom] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-[83vh] px-4 my-6">
          <Image source={images.logo}
            resizeMode='contain' className="w-[115px] h-[35px]" />

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold ">Sign up to Emergent</Text>
          <FormField
            title="Username"
            value={from.username}
            handleChangeText={(e) => setFrom({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={from.email}
            handleChangeText={(e) => setFrom({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={from.password}
            handleChangeText={(e) => setFrom({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp