import Book from "../models/book.js"

export const reserveBook = async (req, res) => {
  try {
      const { userId, username } = req.body;
      const bookId = req.params.id; // Retrieve book ID from URL params

      // Find the book by its ID
      const book = await Book.findById(bookId);

      if (!book) {
          return res.status(404).json({ error: "Book not found" });
      }

      // Update the reservedBy field
      book.reservedBy.push({ userId, username });

      // Save the changes to the book
      await book.save();

      res.status(200).json({ message: "Book reserved successfully", book });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
  }
};


export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    const formattedBooks = allBooks.map((books) => ({
      _id: books._id,
      name: books.name,
      copiesLeft: books.location,
      description: books.description,
      reservedStatus: books.reservedStatus,
    }));
    if (allBooks.length === 0) {
      res.status(204).json({ message: "no Books found in database" });
    } else {
      res
        .status(200)
        .json({ message: "Books found succesfully", formattedBooks });
    }
  } catch (err) {
    // removeEventListener.status(500).json({message: err.message})
    console.error(err);
  }
};

export const addNewBook = async (req, res, next) => {
  try {
    const { name, copiesLeft, description } = req.body;


    const newBook = new Book({
      name,
      copiesLeft,
      description,
    });

    await newBook.save();
    res.status(201).json({ message: "Book registered succesfully", newBook });
    console.log("Book registered succesfully", newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};

export const getSingleBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const singleBook = await Book.findById(BookId);
    if (!singleBook) {
      res
        .status(400)
        .json({ message: `no user found with such id: ${bookId} found ` });
    } else {
      res.status(200).json({ message: "Display Book", singleBook });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err);
  }
};

export const deleteSingleBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookToDelete = await Book.findByIdAndDelete(bookId);
    if (!bookToDelete) {
      res.status(400).json({ message: `no book with such id ${bookId} found` });
    } else {
      res
        .status(200)
        .json({ message: "book deleted successfully", bookToDelete });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "book deleted successfully", bookToDelete });
  }
};

// const updatebook = async (req, res) => {
//     try {
//         const eventId = req.params.id;
//         const { , } = req.body;
//     } catch (err) {

//     }
// }
// export default {
//   getAllBooks,
//   getSingleBook,
//   // addNewBook,
// };
