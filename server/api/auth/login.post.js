import { getUserByUsername } from "../../db/users.js";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~/server/Utils/Jwt.js";
import { userTransformer } from "~/server/transformers/user.js";
import { createRefreshToken } from "~/server/db/refreshTokens.js";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(event, {
      statusCode: 400,
      statusMessage: "Invalid params",
    });
  }

  //Is The user registered

  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(event, {
      statusCode: 400,
      statusMessage: "user not exist",
    });
  }

  //compare password

  const doPasswordMatch = await bcrypt.compare(password, user.password);

  // Generate tokens
  //Access Token
  //Refresh Token

  const { accessToken, refreshToken } = generateTokens(user);

  // save it inside db

  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  // Add http only cookie

  sendRefreshToken(event, refreshToken);

  return {
    user: userTransformer(user),
    access_token: accessToken,
  };
});
