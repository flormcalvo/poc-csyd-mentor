const catchAsync = require('../utils/catchAsync')
const Mentor = require('../model/Mentor')

const MentorController = () => {
  const createMentor = catchAsync(async (req, res, next) => {
    const mentor = await Mentor.create(req.body);

    res.status(201).json({
      status: 'SUCCESS',
      data: {
        mentor,
      },
    });
  });

  const getMentors = catchAsync(async (req, res, next) => {
    const mentors = await Mentor.find();

    res.status(200).json({
      status: 'SUCCESS',
      data: {
        mentors,
      },
    });
  });

  // use the catchAsyc on all function in controller
  const getMentor = catchAsync(async (req, res, next) => {
    const mentor = await Mentor.findById(req.params.mentorId);

    res.status(200).json({
      status: 'SUCCESS',
      data: {
        mentor,
      },
    });
  });

  const updateMentor = catchAsync(async (req, res, next) => {
    const mentor = await Mentor.findByIdAndUpdate(
      req.params.mentorId,
      req.body,
      {new: true},
    );

    res.status(200).json({
      status: 'SUCCESS',
      data: {
        mentor,
      },
    });
  });

  const deleteMentor = catchAsync(async (req, res, next) => {
    const mentor = await Mentor.findByIdAndRemove(req.params.mentorId);

    if (mentor) {
      res.status(200).json({
        status: 'SUCCESS',
        data: {
          mentor,
        },
      });
    } else {
      res.status(404).json({
        status: 'NOT FOUND',
      });
    }
  });

  return {createMentor, getMentors, getMentor, deleteMentor, updateMentor};
};

module.exports = MentorController
