import React, { Fragment, PureComponent } from 'react';
import $ from "jquery";
import { API_SERVER, IMAGES_SERVER } from "../../const";
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import TextField from '@material-ui/core/TextField';

class Home extends PureComponent {
    getGallery = () => {

    };


    state = {
        gallery: []
    };

    componentDidMount() {
        $.ajax({
            url: API_SERVER+'getAllUserPhotos',
            type: 'POST',
            data: {id: localStorage.getItem('id'), token: localStorage.getItem('token')},
        })
            .done((data) => {
                let obj = JSON.parse(data);

                this.setState({
                    gallery: obj
                });
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });


    }

    render() {
        if (!this.state.gallery.items) {
            return '';
        }

        return(
            <Fragment>
                <h1>Main component gallery</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Material</th>
                            <th>Название</th>
                            <th>Тип/Размер</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.gallery.items.map((key, index) => (
                            <tr key={index}>
                                <th>
                                    <img src={IMAGES_SERVER+'s/'+key.src} alt={key.name}/>
                                </th>
                                <th>
                                    <TextField label="Имя" value={key.name}/>
                                </th>
                                <th>
                                    {key.type}<br />
                                    {((parseInt(key.filesize_o)+parseInt(key.filesize_o))/1024/1024).toFixed(2)} MB
                                </th>
                                <th>
                                    <MoreVertOutlinedIcon />
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

export default Home;
