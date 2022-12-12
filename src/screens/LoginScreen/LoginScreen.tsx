import { useForm } from "react-hook-form";
import { login, UserDTO } from "../../api";
import { Button } from "../../components/Button";
import { Form, FormRow } from "../../components/Form";
import { Link } from "../../components/Link";
import { Logo } from "../../components/Logo";
import {
  Screen,
  ScreenHeader,
  ScreenMain,
  ScreenFooter,
} from "../../components/Screen";
import { TextInput } from "../../components/TextInput";
import "./LoginScreen.css";

interface LoginScreenProps {
  onSuccess: (user: UserDTO) => void;
}

interface LoginFieldValues {
  email: string;
  password: string;
}

export function LoginScreen({ onSuccess }: LoginScreenProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
  } = useForm<LoginFieldValues>();

  const onSubmit = async (values: LoginFieldValues) => {
    if (!isValid) return;
    try {
      const response = await login(values);
      if (response.data) {
        onSuccess(response.data);
      } else {
        setError("email", { message: "" });
        setError("password", { message: response.error });
      }
    } catch (error) {}
  };

  const emailErrorMessage = (() => {
    if (errors.email?.message) return errors.email?.message;
    if (errors.email?.type === "required") return "Please, specify your email";
    if (errors.email?.type === "pattern") return "Please, check your email";
  })();

  const passwordErrorMessage = (() => {
    if (errors.password?.message) return errors.password?.message;
    if (errors.password?.type === "required")
      return "Please, specify your password";
  })();

  return (
    <Screen>
      <ScreenHeader>
        <Logo />
      </ScreenHeader>
      <ScreenMain>
        <h1 className="login_header">Welcome, Stranger!</h1>
        <p className="login_text">
          Please log in to this form if you wish to pass the exam.
        </p>
        <Form className="login_form" onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <TextInput
              type="text"
              inputMode="email"
              placeholder="Email"
              isInvalid={emailErrorMessage !== undefined}
              helperText={emailErrorMessage}
              {...register("email", {
                required: true,
                pattern: /.+@.+/,
              })}
              autoFocus
              enterKeyHint="go"
            />
          </FormRow>
          <FormRow>
            <TextInput
              type="password"
              placeholder="Password"
              isInvalid={passwordErrorMessage !== undefined}
              helperText={passwordErrorMessage}
              {...register("password", { required: true })}
              enterKeyHint="go"
            />
          </FormRow>
          <FormRow>
            <Button disabled={isSubmitting}>
              {isSubmitting ? (
                <img alt="" src="/i24-loader.svg" />
              ) : (
                <>
                  <span>Login</span>
                  <img alt="" src="/i24-next.svg" />
                </>
              )}
            </Button>
          </FormRow>
        </Form>
      </ScreenMain>
      <ScreenFooter>
        <Link href="#" className="login_forgot">
          Forgot password?
        </Link>
      </ScreenFooter>
    </Screen>
  );
}
