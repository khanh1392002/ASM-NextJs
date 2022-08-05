import { signin, signup } from "../api/user";
import { User } from "../type/user";

const userpertion = () => {
    const signupuser = async (user:User) => {
        const {data} = await signup(user)
    }
    const signinuser = async (user:User) => {
        const {data: item} = await signin(user)
        return {item}
    }
    return{
        signupuser,
        signinuser
    }
}
export default userpertion