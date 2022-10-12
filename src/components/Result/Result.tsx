import React from 'react';

type Props = {
  result: number,
};

export const Result: React.FC<Props> = ({ result }) => (
  <div className="test__result">
    {result === 10 ? (
      <div className="test__result test__result--excellent">
        <div>&#127881;&#127881;&#127881;</div>
        {`Вітаємо ${result * 10}% правильних відповідей`}
      </div>
    ) : (
      `Правильних відповідей: ${result * 10}%`
    )}
  </div>
);
