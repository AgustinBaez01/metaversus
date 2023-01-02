import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">0{number}</p>
    </div>
      <p className="flex-1 font-normal ml-[30px] text-[17px] text-[#B0B0B0] leading-[32px]">{text}</p>
  </div>
);

export default StartSteps;
