var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "Студия",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.29508890404718535,
        "pitch": 0.1510149208424778,
        "fov": 0.8925319617895804
      },
      "linkHotspots": [
        {
          "yaw": -2.976364852960838,
          "pitch": 0.10355744758873797,
          "rotation": 4.71238898038469,
          "target": "1-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom",
      "name": "bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.7162404311277637,
        "pitch": 0.12941513935226823,
        "fov": 1.4967563682390181
      },
      "linkHotspots": [
        {
          "yaw": 3.112891932802728,
          "pitch": -0.00859625706925371,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Studio-rent",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
