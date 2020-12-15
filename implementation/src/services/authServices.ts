import { User } from "../entities/User";
import { sha1 } from "../util";
import { SignedInResult } from "./signedInResult";

export async function signIn(userName: string, password: string): Promise<{ result: SignedInResult, user?: User }> {
  if (!userName || !password)
    return buildSignedInResult(SignedInResult.NoUserNameOrPassword);

  const lowerUserName = userName.toLowerCase();
  let user;
  try {
    user = await User.findOne({ name: lowerUserName });
  }
  catch (error) {
    console.log(error);
    return buildSignedInResult(SignedInResult.DBError);
  }
  if (user) {
    const hashedPassword = sha1(password + user.created.toISOString());
    if (user.password == hashedPassword)
      return buildSignedInResult(SignedInResult.Succeeded, user);
    else
      return buildSignedInResult(SignedInResult.PasswordIncorrect);
  }

  console.debug(`user [${userName}] not found.`)
  return buildSignedInResult(SignedInResult.UserNotFound);
}

function buildSignedInResult(res: SignedInResult, user?: User): { result: SignedInResult, user?: User } {
  return { result: res, user: user };
}