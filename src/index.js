import React from 'react';
import axios from 'axios';
import './index.css';

;(async () => {
  const response = await axios({
    url: 'https://fortnite-api.com/v1/stats/br/v2?name=Guyfierimustdie&time=lifetime',
    method: 'get'
  })

  console.log(response)
})()