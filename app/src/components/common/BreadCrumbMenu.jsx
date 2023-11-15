import { Breadcrumbs } from "@mui/material";

//TODO
const BreadCrumbMenu = (props) => {

    const breadcrumbNameMap = {
        '/': 'Home',
        SUBJECTS: 'Subjects',
        // todo: add entry for dashboard/user settings
    }

    const handleClick = (event) => {
        // todo
    }

    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumbs">

            </Breadcrumbs>
        </div>
    )
}

export default BreadCrumbMenu;