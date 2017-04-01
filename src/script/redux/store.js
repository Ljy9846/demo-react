import { createStore } from 'redux'

function changer (state = {title: 'state返回',left:'stateinput',right:'state上海'} , action) {
  switch (action.type) {
    case 'board':
      return { title: 'boardValue',one:'input',right:'place'}
    case 'kind':
      return { title: '',two:'input'}
      case 'search':
      return { title: '返回',three:'input',search:'搜索'}
    case 'cart':
      return { title: '',left:'购物车' ,cart:'编辑'}
    case 'my':
      return { title: '',left:'个人中心'}
    case 'loginup':
      return { title: '返回',left:'登录',loginup:'注册' }
    case 'loginin':
      return { title: '返回',left:'注册',loginin:'登录'}
    default:
      return state
  }
}

// 将 Redux state 转化成 组件的 props
function mapStateToProps (state) {
  return {
    value: state.title,
    up:state.left,
    one:state.one,
     two:state.two,
    three:state.three,

    right:state.right,
    search:state.search,
    cart:state.cart,
    loginup:state.loginup,
    loginin:state.loginin,

  }
}

// 将 Redux actions 转化成 组件的 props
function mapDispatchToProps (dispatch) {
  return {
    onChange: (action) => dispatch(action)
  }
}

let store = createStore(changer)

export { mapStateToProps, mapDispatchToProps, store }
