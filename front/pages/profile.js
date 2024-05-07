import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditform from '../components/NicknameEditform';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [{ nickname:'박예진'}, { nickname:'바보'}, { nickname:'하영'}];
    const followingList = [{ nickname:'박예진'}, { nickname:'바보'}, { nickname:'하영'}];
   
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditform/>
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    );
}

export default Profile;