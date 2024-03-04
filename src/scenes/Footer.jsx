import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-23 bg-blue pt-1 ">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair  text-deep-blue">
          Helpline No: +919216939624 <br /> Email Us: contact@jaitechrobotics.com <br/> <span className="font-semibold text-2xl">Jaitech Robotics Pvt.Ltd. All Rights Reserved.</span> 
          </p>
          <p className="font-playfair text-md text-deep-blue">
          This Website is Developed By Pranjal Pareek <br />pareekpranjal@outlook.com <br /> +9180055574463
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
