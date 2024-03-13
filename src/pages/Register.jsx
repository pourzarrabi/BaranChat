import AddAvatar from '../data/img/addAvatar.png';

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">ثبت نام کنید</span>
        <form>
          <input type="text" placeholder="نام مستعار..." />
          <input type="email" placeholder="آدرس ایمیل..." />
          <input type="password" placeholder="رمز عبور..." />
          <inpu style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="id">
            <img src={AddAvatar} alt="آواتار" />
            <span>افزودن آواتار</span>
          </label>
          <button>ثبت نام</button>
        </form>
        <p>اگر حساب دارید، وارد شوید!</p>
      </div>
    </div>
  );
};

export default Register;
