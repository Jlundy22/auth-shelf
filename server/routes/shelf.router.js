const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

cloudinary.config({
  cloud_name: "dpaqnprec",
  api_key: "721591291745171",
  api_secret: "miwEIDUCgaZm31r3afGjLDuC6XU",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "DEV",
  },
});

const upload = multer({ storage: storage });

// app.get("/", (req, res) => {
//   return res.json({ message: "Hello World 🇵🇹 🙌" });
// });

router.post('/upload', upload.single('image'), (req, res) => {
 {
    const sqlQuery = `
    INSERT INTO "images" ( "image_url")
    VALUES ($1);
    `;
    const sqlValues = [req.file.path];
    pool
      .query(sqlQuery, sqlValues)
      .then((dbRes) => {
        res.sendStatus(201);
      })
      .catch((dbErr) => {
        res.sendStatus(500);
      });
  }
});
router.get('/images', (req, res) => {
  const sqlQuery = `
  SELECT * FROM images
  `;
  pool
    .query(sqlQuery)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error in the /api/shelf GET request:', error);
    });
});

// app.post("/", upload.single("picture"), async (req, res) => {
   //return res.json({ picture: req.file.path });
// });

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
  SELECT * FROM item
  WHERE user_id=$1
  ORDER BY "id" DESC
  `;
  const sqlValues = [req.user.id];
  pool
    .query(sqlQuery, sqlValues)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error in the /api/shelf GET request:', error);
    });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  
  if (req.isAuthenticated()) {
    const sqlQuery = `
    INSERT INTO "item" ("description", "image_url", "user_id")
    VALUES ($1, $2, $3);
    `;
    const sqlValues = [req.body.newThing, req.body.newImageUrl, req.user.id];
    pool
      .query(sqlQuery, sqlValues)
      .then((dbRes) => {
        res.sendStatus(201);
      })
      .catch((dbErr) => {
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(401);
  }
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  const sqlQuery = 'DELETE FROM item WHERE id=$1';
  pool
    .query(sqlQuery, [req.params.id])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error in /api/shelf DELETE request:', error);
    });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
