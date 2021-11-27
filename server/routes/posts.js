const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const User = require('../models/User')

router.get('/', async (req, res) => {
  res.send('Posts Page')
})

// CREATE A POST
router.post('/', async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savePost = await newPost.save()
    res.status(200).json({
      success: true,
      message: 'Post created successfully !',
      post: savePost,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error !',
      error: err.message,
    })
  }
})

// UPDATE A POST
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.updateOne({$set: req.body})
      res.status(200).json({
        success: true,
        message: 'The post has been updated !',
      })
    } else {
      return res.status(403).json({
        success: false,
        message: 'User is not found !',
      })
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'The post is not found !',
    })
  }
})

// DELETE A POST
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.deleteOne()
      res.status(200).json({
        success: true,
        message: 'The post has been deleted !',
      })
    } else {
      return res.status(403).json({
        success: false,
        message: 'User is not found !',
      })
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'The post is not found !',
    })
  }
})

// LIKE/UNLIKE A POST
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({$push: {likes: req.body.userId}})
      res.status(200).json({
        success: true,
        message: 'The post has been liked !',
      })
    } else {
      await post.updateOne({$pull: {likes: req.body.userId}})
      res.status(200).json({
        success: true,
        message: 'The post has been unliked !',
      })
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error !',
      error: err.message,
    })
  }
})

// GET A POST
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Successful !',
      post,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error !',
      error: err.message,
    })
  }
})

// GET TIMELINE POSTS
router.get('/timeline/all', async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId)
    const userPosts = await Post.find({userId: currentUser._id})
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({userId: friendId})
      })
    )
    res.json(userPosts.concat(...friendPosts))
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error !',
      error: err.message,
    })
  }
})

module.exports = router
