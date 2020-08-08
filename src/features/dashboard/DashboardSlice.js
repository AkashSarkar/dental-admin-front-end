import { createSlice } from '@reduxjs/toolkit';
import { API, PUBLIC_API } from '../../config';

export const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    companyProfile: {},
    isLoading: false,
    isErrors: false,
    sliders: []
  },
  reducers: {
    setCompanySettings: (state, action) => {
      state.companyProfile = action.payload;
    },
    setSliders: (state, action) => {
      state.sliders = action.payload;
    },
    setIsProcess: (state) => {
      state.isLoading = true
    },
    setProcessComplete: (state) => {
      state.isLoading = false
    },
    setIsError: (state) => {
      state.isErrors = true
    },
    setNotError: (state) => {
      state.isErrors = false
    },
  }
})
export const {
  setCompanySettings, setSliders, setIsProcess, setProcessComplete,
  setIsError, setNotError
} = DashboardSlice.actions;
export const getCompanySettingsThunk = () => dispatch => {
  PUBLIC_API.get('/company-settings/')
    .then((res) => {
      dispatch(setCompanySettings(res.data.settings))

    })
    .catch((e) => {
      console.log("e.error")
    })
}
export const postCompanyProfileThunk = (postData) => dispatch => {
  dispatch(setIsProcess())
  API.post('/company-settings/', postData).then((res) => {
    dispatch(setProcessComplete())
    dispatch(getCompanySettingsThunk())
    dispatch(setNotError())
  }).catch((e) => {
    dispatch(setIsError())
    dispatch(setProcessComplete())
  })
}

export const postSlidersThunk = (postData, history = null) => dispatch => {
  dispatch(setIsProcess())
  API.post('/sliders/', postData).then((res) => {
    dispatch(setProcessComplete())
    dispatch(getSlidersThunk())
    dispatch(setNotError())
    history.push('/sliders')
  }).catch((e) => {
    dispatch(setIsError())
    dispatch(setProcessComplete())
  })
}
export const deleteSlidersThunk = (id) => dispatch => {
  dispatch(setIsProcess())
  API.delete(`/sliders/${id}`).then((res) => {
    dispatch(setProcessComplete())
    dispatch(getSlidersThunk())
    dispatch(setNotError())
  }).catch((e) => {
    dispatch(setIsError())
    dispatch(setProcessComplete())
  })
}
export const getSlidersThunk = () => dispatch => {
  PUBLIC_API.get('/sliders/')
    .then((res) => {
      dispatch(setSliders(res.data.sliders))
    })
    .catch((e) => {
      console.log("e.error")
    })
}
export default DashboardSlice.reducer;
