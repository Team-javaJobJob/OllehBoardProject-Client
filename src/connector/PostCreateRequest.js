import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/boards';

const postCreateRequest = {


  postCreate: (post) => {
    return axios.post(`${API_URL}/list`, post)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      })
    },}

export default postCreateRequest;

