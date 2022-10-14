const colors = ['#00aff0', '#00a64f', '#ffdf00', '#ffd900', '#cd4800'];

export default function colorText(value) {
  //   let color = '';
  //   console.log(colors[0]);
  //   switch (value) {
  //     case value < 18.5:
  //       color = colors[0];
  //     case value >= 18.5 && value <= 24.9:
  //       color = colors[1];
  //     case value >= 25 && value <= 29.9:
  //       color = colors[2];
  //     case value >= 30 && value <= 39.9:
  //       color = colors[3];
  //     case value >= 40:
  //       color = colors[4];
  //   }

  //   return color;
  if (value < 18.5) return colors[0];
  else if (value >= 18.5 && value <= 24.9) return colors[1];
  else if (value >= 25 && value <= 29.9) return colors[2];
  else if (value >= 30 && value <= 39.9) return colors[3];
  else if (value >= 40) return colors[4];
  else return 'gray';
}
