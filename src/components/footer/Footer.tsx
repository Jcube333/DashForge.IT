import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <span>DashForge.IT</span>
      <div className="socials">
        <a href="https://github.com/Jcube333">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
            alt="Github"
          />
        </a>
        <a href="https://twitter.com/jcubeDev">
          <img
            src="https://static.toiimg.com/thumb/msid-102075304,width-400,resizemode-4/102075304.jpg"
            alt="Twitter/x"
          />
        </a>

        <a href="https://jcube333.netlify.app/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
            alt="Linkedin"
          />
        </a>
      </div>
      <span>©Jcube333</span>
    </div>
  );
}
