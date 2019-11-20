import User from '../models/user';

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(400).json({ error: 'Email already used !' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.status(200).json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
