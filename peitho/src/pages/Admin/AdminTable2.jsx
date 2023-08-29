import * as React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { visuallyHidden } from "@mui/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  deleteStories,
  getAllProducts,
  getAllStories,
  postStories,
} from "../../actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Edit from "@mui/icons-material/Edit";

import "../../styles/admin.css";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "id",
    alignment: "right",
    disablePadding: true,
    label: "ID",
  },
  {
    id: "name",
    alignment: "right",
    disablePadding: false,
    label: "Prendas",
  },
  {
    id: null,
    alignment: "right",
    disablePadding: false,
    label: "Imagen",
  },
  {
    id: "price",
    alignment: "right",
    disablePadding: false,
    label: "Precio",
  },
  {
    id: null,
    alignment: "right",
    disablePadding: false,
    label: "Acciones",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell> */}
        {headCells.map((headCell, index) => (
          <TableCell
            key={index}
            align={headCell.alignment}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={headCell.id ? createSortHandler(headCell.id) : null}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = ({ setSelected }) => {
  const handleLogOut = () => {
    localStorage.removeItem("logged");
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        bgcolor: "pink",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "70%",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "thistle",
              padding: "15px",
              alignItems: "center",
              cursor: "pointer",
              border: "1px solid salmon",
            }}
            variant="h6"
            id="tableTitle"
            component="div"
            onClick={() => setSelected(true)}
          >
            Administrar prendas
          </Typography>

          <Typography
            sx={{
              backgroundColor: "thistle",
              padding: "15px",
              alignItems: "center",
              cursor: "pointer",
              border: "1px solid salmon",
            }}
            variant="h6"
            id="tableTitle"
            component="div"
            onClick={() => setSelected(false)}
          >
            Administrar Historias
          </Typography>
        </div>
        <div>
          <Tooltip title="Agregar prenda">
            <Link to="/admin/agregar">
              <IconButton>
                <AddCircleOutlineOutlinedIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Log out">
            <LogoutIcon
              onClick={handleLogOut}
              style={{ cursor: "pointer" }}
            ></LogoutIcon>
          </Tooltip>
        </div>
      </div>
    </Toolbar>
  );
};

export default function EnhancedTable() {
  const [selected, setSelected] = React.useState(true);

  const dispatch = useDispatch();

  const allStories = useSelector((state) => state.allStories);
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllStories());
  }, [dispatch]);

  async function handleDelete(e) {
    try {
      dispatch(deleteProduct(e));
      alert("Prenda eliminada!");
      setTimeout(() => {
        dispatch(getAllProducts());
      }, 600);
    } catch (error) {
      console.log(error, "Error al eliminar");
    }
  }
  function handleDeleteStory(id) {
    try {
      dispatch(deleteStories(id));
      alert(`Historia ${id} eliminada!`);
      setTimeout(() => {
        dispatch(getAllStories());
      }, 300);
    } catch (err) {
      console.error(err, "Error al eliminar historia");
    }
  }

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - allProducts.length) : 0;

  const [selectedFile, setSelectedFile] = React.useState([]);
  const [previewImg, setPreviewImg] = React.useState();

  function getBase64(file) {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => res(reader.result);
      reader.onerror = (error) => rej(error);
    });
  }

  const ArrTest = [];
  useEffect(() => {
    try {
      if (!selectedFile) {
        setPreviewImg(undefined);
        return;
      }
      for (let index = 0; index < selectedFile.length; index++) {
        const element = selectedFile[index];
        if (element.name.split(".").pop() === "mp4") {
          getBase64(element).then((data) =>
            ArrTest.push({ url: data, type: "video" })
          );
        }
        if (element.name.split(".").pop() !== "mp4") {
          getBase64(element).then((data) =>
            ArrTest.push({ url: data, type: "img" })
          );
        }
      }
      setPreviewImg(ArrTest);

      return () => URL.revokeObjectURL(ArrTest);
    } catch (err) {
      console.log(err);
    }
    /* eslint-disable */
  }, [selectedFile]);
  /* eslint-disable */

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("Historias modificadas con exito!");
      dispatch(postStories(previewImg));
      dispatch(getAllStories());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {selected ? (
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <EnhancedTableToolbar setSelected={setSelected} />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={allProducts.length}
                />
                <TableBody>
                  {stableSort(allProducts, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                            align="right"
                          >
                            {row.id}
                          </TableCell>
                          {/* <TableCell align="right">{row.id}</TableCell> */}
                          <TableCell align="right">{row.name}</TableCell>
                          <TableCell align="right">
                            <img
                              src={row.image[0]}
                              alt=""
                              style={{ width: "50px", height: "50px" }}
                            />
                          </TableCell>
                          <TableCell align="right">{row.price}</TableCell>
                          <TableCell style={{ margin: "5px" }}>
                            <Stack
                              style={{
                                display: "flex",
                                justifyContent: "right",
                              }}
                              direction="row"
                              spacing={2}
                            >
                              <Button
                                variant="contained"
                                color="info"
                                startIcon={<Edit />}
                              >
                                <a
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                  href={`/admin/editar/${row.id}`}
                                >
                                  Editar
                                </a>
                              </Button>
                              <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="error"
                                onClick={(event, rowData) => {
                                  var answer = window.confirm(
                                    "Are you sure you want to delete the product: " +
                                      row.name +
                                      "?"
                                  );
                                  if (answer) {
                                    handleDelete(row.id);
                                  } else {
                                    return;
                                  }
                                }}
                              >
                                Eliminar
                              </Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={allProducts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </Box>
      ) : (
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <EnhancedTableToolbar setSelected={setSelected} />
            <div className="adminStories">
              {allStories.length !== 0
                ? allStories?.map((singleStory, index) => (
                    <React.Fragment key={singleStory.id}>
                      <div
                        className="videodiv"
                        style={{ margin: "0 20px", justifyContent: "none" }}
                      >
                        {singleStory.type === "video" ? (
                          <video muted loop autoPlay>
                            <source src={singleStory.url} type="video/mp4" />
                          </video>
                        ) : (
                          <img src={singleStory.url} alt="Story preview" />
                        )}
                        <div>
                          <button
                            onClick={() => handleDeleteStory(singleStory.id)}
                          >
                            Borrar historia
                          </button>
                        </div>
                      </div>
                    </React.Fragment>
                  ))
                : null}
            </div>
            <form className="adminStoriesForm" onSubmit={handleSubmit}>
              <input
                onChange={onSelectFile}
                type="file"
                multiple
                accept="image/png, image/jpeg, video/mp4"
              />
              {previewImg && (
                <div>
                  {previewImg.map((img, i) => {
                    return (
                      <div key={i}>
                        {img.type === "video" ? (
                          <video
                            style={{ width: "170px", height: "370px" }}
                            muted
                            loop
                            autoPlay
                          >
                            <source src={img.url} type="video/mp4" />
                          </video>
                        ) : (
                          <img
                            style={{ width: "70px", height: "70px" }}
                            src={img.url}
                            alt={"image-" + i}
                            key={i}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              <div>
                <button
                  className="SubmitBtn"
                  type="submit"
                  disabled={!selectedFile}
                >
                  Actualizar historias!
                </button>
              </div>
            </form>
          </Paper>
        </Box>
      )}
    </>
  );
}
