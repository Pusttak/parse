import { Indicator, IndicatorLilne } from './SuccessIndicator.styled';

const SuccessIndicator = ({ all, last }) => {
  const width = Math.ceil(100 / (all / (all - last)));

  return (
    <>
      <Indicator>
        {all - last} / {all}
      </Indicator>
      <IndicatorLilne width={width}></IndicatorLilne>
    </>
  );
};

export default SuccessIndicator;
