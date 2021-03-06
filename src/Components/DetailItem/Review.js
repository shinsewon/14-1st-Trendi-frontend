import react, { Component } from 'react';
import ReviewListComponet from './ReviewListComponet';
import configData from '../../config.json';
import WriteReview from './WriteReview';
import './Review.scss';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      viewSate: 'all',
      viewList: props.reviewProps,
      calList: {
        content: '',
        image_url: '',
        nick_name: '',
        product: 0,
        star: 0,
        updated_at: '',
        review_id: 0,
        user_information: null,
      },
    };
  }

  modalView = (value) => {
    const { modal } = this.state;
    if (value === 'close') {
      const calList = {
        content: '',
        image_url: '',
        nick_name: '',
        product: 0,
        star: 0,
        updated_at: '',
        user_information: null,
      };
      this.setState({ calList });
    }
    this.setState({ modal: !modal });
  };

  updateViewSet = (data) => {
    this.setState({ calList: data });
    this.modalView();
  };

  listFilter = (value) => {
    const arrList = {
      all: () => this.state.viewList,
      imgview: () => this.state.viewList.filter((el) => el.image_url && el),
      textview: () => this.state.viewList.filter((el) => !el.image_url && el),
    };
    return arrList[value]();
  };

  changView = (viewSate) => {
    this.setState({ viewSate });
  };

  insertApi = (insertData) => {
    const { content, image_url, user_id, product, star } = insertData;
    this.modalView();
    fetch(`${configData.REVIEW}/create`, {
      headers: { Authorization: localStorage.getItem('token') },
      method: 'post',
      body: JSON.stringify({
        content: content,
        image_url: '',
        product_id: 1, //상품 id
        star: star,
        user_information: '156cm 51kg',
      }),
    })
      .then((res) => res.json())

      .then((res) =>
        res.message === 'SUCCESS'
          ? alert('리뷰가 추가 되었습니다')
          : console.log('실패=======================================')
      );
  };

  updateAPI = (updateData) => {
    const { content, image_url, user_id, reivew_id, star } = updateData;
    fetch(`${configData.REVIEW}11`, {
      method: 'put',
      body: JSON.stringify({
        content: content,
        image_url: image_url,
        user_id: user_id, //로그인을 하여서 추후 변경
        review_id: reivew_id,
        star: star,
        user_information: '156cm 51kg',
      }),
    }).then((res) => res.json());
  };

  deleteView = (deleteView) => {
    const { review_pk } = deleteView;
    fetch(`${configData.REVIEW}/${review_pk}`, {
      method: 'delete',
    }).then((res) => res.json());
  };

  render() {
    const { viewSate, modal, viewList } = this.state;
    return (
      <div className="Review">
        <div className="ReviewList">
          <header>
            <div className="writeForm" onClick={this.modalView}>
              <h1>리뷰({viewList ? viewList.length : 0})</h1>
              <input
                className="writeBtnReview"
                type="button"
                value="글쓰기"
                onClick={this.modalView}
              />
              <WriteReview
                closeModal={this.modalView}
                view={modal}
                insertAPI={this.insertApi}
                updateData={this.state.calList}
                updateAPI={this.updateAPI}
              />
            </div>
            <div>
              <span
                className={`${viewSate === 'all' && 'selectTab'}`}
                onClick={() => this.changView('all')}
              >
                전체
              </span>
              <span
                className={`${viewSate === 'imgview' && 'selectTab'}`}
                onClick={() => this.changView('imgview')}
              >
                포토리뷰
              </span>
              <span
                className={`${viewSate === 'textview' && 'selectTab'}`}
                onClick={() => this.changView('textview')}
              >
                텍스트리뷰
              </span>
            </div>
          </header>
          <div className="layoutLine"></div>
          {viewList ? (
            <ReviewListComponet
              reviewList={this.listFilter(viewSate)}
              updateView={this.updateViewSet}
              deleteView={this.deleteView}
            />
          ) : (
            <div>리뷰가 없습니다</div>
          )}
        </div>
      </div>
    );
  }
}
export default Review;
