import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, DropdownButton, Dropdown } from "react-bootstrap";

import ModalTafsir from "../utils/modal";
import Loading from "../utils/loading";
import UpButton from "../layouts/upbutton";
import { useDispatch } from "react-redux";
import { pageTitleAction } from "../../redux/slices/pageTitle";

const DetailJuz = () => {
  const location = useLocation();
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(10);
  const [show, setShow] = useState(false);
  const [getTaf, setTaf] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let isCanceled = true;
    if (isCanceled === true) {
      setLoading(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}${location.pathname}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    return () => {
      isCanceled = false;
    };
  }, [location.pathname]);
  datas.data?.juz &&
    dispatch(pageTitleAction.setpageTitle(`JUZ ${datas.data?.juz}`));

  useEffect(() => {
    const onScroll = function () {
      if (window.innerHeight + window.scrollY + 0.5 >= document.body.offsetHeight) {
        setLimit((prev) => prev + 10);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openModal = (t) => {
    setTaf(t);
    setShow(true);
  };

  const closeModal = () => setShow(false);

  if (loading) return <Loading />;

  return (
    <Container>
      <center className="mt-4 mb-4">
        <h3 className="basmalah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h3>
      </center>
      {datas.data?.verses.map((data, i) => {
        if (i <= limit) {
          return (
            <div key={i} className="ayat">
              <div className="d-flex align-items-center">
                <DropdownButton variant="secondary" title={data.number.inSurah}>
                  <Dropdown.Item onClick={() => openModal(data.tafsir.id.long)}>
                    Tafsir
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="arabic">{data.text.arab}</div>
              <div>
                <b>{data.text.transliteration.en}</b>
              </div>
              <div>{data.translation.id}</div>
            </div>
          );
        }
      })}
      <ModalTafsir show={show} onHide={closeModal} desc={getTaf} />
      <UpButton />
    </Container>
  );
};

export default DetailJuz;
