import { sendError } from "h3";
import { getRefreshTokenByToken } from "~/server/db/refreshTokens";
export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event);

  const refreshToken = cookies.refresh_token;

  if (!refreshToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "refresh token is invalid",
      })
    );
  }

  const rToken = await getRefreshTokenByToken(refreshToken);
  return {
    rToken,
  };
});
