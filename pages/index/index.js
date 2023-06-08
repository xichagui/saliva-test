// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    sampleNo: '',
    sampleNoCheck: false,
    minDate: new Date(2023, 1, 1).getTime(),
    maxDate: new Date(2030, 10, 1).getTime(),
    currentDate: new Date().getTime(),
    datetimePopupShow: false,
    testDatetime: null,
    testDatetimeStr: '',
    testDatetimeCheck: false,
    caseNo: '',
    caseNoCheck: false,
    age: '',
    height: '',
    weight: '',
    gender: '1',
    oralHygiene: '1',
    smoke: '2',
    medicine: [],
    desc: '',
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true
    //   })
    // }
    this.setData({sampleNo: '',
      sampleNoCheck: false,
      minDate: new Date(2023, 1, 1).getTime(),
      maxDate: new Date(2030, 10, 1).getTime(),
      currentDate: new Date().getTime(),
      datetimePopupShow: false,
      testDatetime: null,
      testDatetimeStr: '',
      testDatetimeCheck: false,
      caseNo: '',
      caseNoCheck: false,
      age: '',
      height: '',
      weight: '',
      gender: '1',
      oralHygiene: '1',
      smoke: '2',
      medicine: [], 
      desc: ''
    })
  },
  onUnload() {
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true
    //   })
    // }
    this.setData({sampleNo: '',
      sampleNoCheck: false,
      minDate: new Date(2023, 1, 1).getTime(),
      maxDate: new Date(2030, 10, 1).getTime(),
      currentDate: new Date().getTime(),
      datetimePopupShow: false,
      testDatetime: null,
      testDatetimeStr: '',
      testDatetimeCheck: false,
      caseNo: '',
      caseNoCheck: false,
      age: '',
      height: '',
      weight: '',
      gender: '1',
      oralHygiene: '1',
      smoke: '2',
      medicine: [], 
      desc: ''
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onInput(event) {
    var date = new Date(event.detail)
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : (date.getDate())) + ' ';
    var h = (date.getHours() < 10 ? '0' + (date.getHours()) : (date.getHours())) + ':';
    var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : (date.getMinutes()));
    this.setData({
      testDatetimeStr: Y+M+D+h+m,
      testDatetime: event.detail
    });
    this.closePopup()
  },
  showPopup() {
    this.setData({datetimePopupShow: true})
  },
  closePopup() {
    this.setData({datetimePopupShow: false})
  },
  onMedicineChange(event) {
    this.setData({medicine: event.detail})
  },
  onSubmit() {
    const data = this.data
    const that = this
    var dataCheck = true
    console.log(this.data)
    if (data.sampleNo) {
      that.setData({sampleNoCheck: false})
    } else {
      that.setData({sampleNoCheck: true})
      dataCheck = false
    }
    if (data.testDatetimeStr) {
      that.setData({testDatetimeCheck: false})
    } else {
      that.setData({testDatetimeCheck: true})
      dataCheck = false
    }
    if (data.caseNo) {
      that.setData({caseNoCheck: false})
    } else {
      that.setData({caseNoCheck: true})
      dataCheck = false
    }

    if (!dataCheck) {
      wx.showToast({
        title: '请填写必填信息',
        icon: 'error',
        duration: 2000
      })
    } else {
      console.log(this.data)
      wx.navigateTo({
        url: '/pages/result/result',
      })
    }
  }
})
