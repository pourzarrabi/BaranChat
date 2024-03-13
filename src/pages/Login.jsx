const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">وارد شوید</span>
        <form>
          <input type="email" placeholder="آدرس ایمیل..." />
          <input type="password" placeholder="رمز عبور..." />

          <button>ورود</button>
        </form>
        <p>اگر حساب ندارید، ثبت نام کنید!</p>
      </div>
    </div>
  );
};

export default Login;
