import React, {useState} from 'react';
import * as S from './styled';
import AppLayout from 'components/layout/AppLayout';
import Bg from 'images/first-bg.jpg';
import ImageCat from 'images/cuteCat.jpg';
import CatGiphy from 'images/giphy2.gif';
import CardPopupFirst from 'components/CardPopupFirst';
import CardPopupSecond from 'components/CardPopupSecond';
import CardPopupThird from 'components/CardPopupThird';

import Button from 'components/Typo/Button';
import AudioFirstClick from 'audios/first-click.wav';
import AudioHover from 'audios/hover-in-button.wav';
import AudioSelect from 'audios/select-click.wav';

export default function Home() {
  const [isShow, setIsShow] = useState(true);
  const [isShowButtonInfor, setIsShowButtonInfor] = useState(false);
  const [isShowButtonConfirm, setIsShowButtonConfirm] = useState(false);
  const [isShowButtonFinal, setIsShowButtonFinal] = useState(false);
  let datas = 'Vì Cậu đẹp trai dễ thương nạ ';
  const [value, setValue] = useState([]);

   function handleFirstClick() {
    let audio = new Audio();
    audio.src = AudioFirstClick;
    audio.play();
    setIsShow(!isShow);
    setIsShowButtonInfor(!isShowButtonInfor);
  }

  function handleHover(item) {
    let numbers = 840;
    let number2 = 520;
    let indexLeft = Math.floor(Math.random() * numbers);

    let indexRight = Math.floor(Math.random() * number2);
    item.target.style.left = indexLeft + 'px';
    item.target.style.top = indexRight + 'px';

    let audio = new Audio();
    audio.src = AudioHover;
    audio.play();
  }
  function handleOpenConfirm() {
    setIsShowButtonConfirm(!isShowButtonConfirm);

    let audio = new Audio();
    audio.src = AudioSelect;
    audio.play();
  }
  function handleValue(e) {
    e.target.value = datas;

    let index = 0;
    let length = datas.length;
    let sliceData = datas.slice(index, length);

    setValue(sliceData);
  }
  function handleOpenFinal() {
    setIsShowButtonFinal(!isShowButtonFinal);
     setIsShowButtonConfirm(false);
    let audio = new Audio();
    audio.src = AudioSelect;
    audio.play();
  }
  async function handleCloseFinal() {
    await setIsShowButtonFinal(!isShowButtonFinal);
  }

  return (
    <AppLayout>
      {isShow && (
        <CardPopupFirst $bg={Bg} $src={ImageCat}>
          <S.Heading3 className="pt-3">Heluuu bạnnnn !!</S.Heading3>
          <S.Text>
            Tớ có điều này muốn hỏi á nhớ phải trả lời thật lòng nhaaaaa
          </S.Text>
          <Button $type="green" click={handleFirstClick}>
            OK
          </Button>
        </CardPopupFirst>
      )}
      <Button $type="danger" click={handleOpenConfirm}>
        Thích {'<'} 3{' '}
      </Button>
      {isShowButtonInfor && (
        <Button $type="infor" hover={handleHover}>
          Không Thíchhh{' '}
        </Button>
      )}
      {isShowButtonConfirm && (
        <CardPopupSecond>
          <S.Giphy src={CatGiphy} />
          <S.Heading3>Nói cho mình lí do cậu thích tớ đi {'<'} 3000</S.Heading3>
          <S.Input onChange={handleValue} value={value} />
          <S.BoxCenter>
            <Button
              $type="confirm"
              margin="30px 0px 0px 0px"
              click={handleOpenFinal}
            >
              Gửi cho tớ đi{' '}
            </Button>
          </S.BoxCenter>
        </CardPopupSecond>
      )}
      {isShowButtonFinal && (
        <CardPopupThird>
        <S.BoxCenter>
          <S.Heading3>Hihiii tớ biết mà :v Lớp diuuuuu {'=))'}</S.Heading3>
          </S.BoxCenter>
          <S.Text>
            Vô tình gặp gỡ rồi mang theo nhiều mộng mer êiii {'=))'}
          </S.Text>
         
          <S.BoxCenter>
            <Button
              $type="final"
              margin="30px 0px 0px 0px"
              click={handleCloseFinal}
            >
            Hết gòi baiiiii {' :>>'}
            </Button>
          </S.BoxCenter>
        </CardPopupThird>
      )}
      ;
    </AppLayout>
  );
}
