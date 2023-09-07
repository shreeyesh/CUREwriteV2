// dbHandler.js

const Profile = require('../models/profile');
const Follower = require('../models/follower');
const { profile } = require('console');

async function followUser(followerUsername, followeeUsername) {
    const follower = await Profile.findOne({ username: followerUsername });
    const followee = await Profile.findOne({ username: followeeUsername });
    if (!follower || !followee) {
        throw new Error('User not found');
    }

    const existingRelation = await Follower.findOne({ follower: follower._id, followee: followee._id });
    if (existingRelation) {
        throw new Error('Already following this user');
    }

    const newRelation = new Follower({
        follower: follower._id,
        followee: followee._id
    });

    if (newRelation){
        followee.followers++;
        await followee.save();
    }

    await newRelation.save();

    return 'Successfully followed user';
}

async function unfollowUser(followerUsername, followeeUsername) {
    const follower = await Profile.findOne({ username: followerUsername });
    const followee = await Profile.findOne({ username: followeeUsername });

    if (!follower || !followee) {
        throw new Error('User not found');
    }

    const relation = await Follower.findOne({ follower: follower._id, followee: followee._id });
    if (!relation) {
        throw new Error('Not following this user');
    }
    if(relation){
        followee.followers--;
        await followee.save();
    }

    await relation.deleteOne();

    return 'Successfully unfollowed user';
}

async function followCheck(followerUsername, followeeUsername){
    const follower = await Profile.findOne({ username: followerUsername });
    const followee = await Profile.findOne({ username: followeeUsername });
    const existingRelation = await Follower.findOne({ follower: follower._id, followee: followee._id });
    if (existingRelation) {
        return '1';
    }
    return '0'
}

module.exports = { followUser, unfollowUser,followCheck };
