import React from 'react'
import './admin.scss'
import { CiShoppingCart } from 'react-icons/ci'
export default function Admin() {
return (
<div>
  <header>
    <div className='header'>
      <div><i className="fa-solid fa-house"></i>Home</div>
      <div><i className="fa-solid fa-list"></i>Contents</div>
      <div><i className="fa-solid fa-list-ul"></i>Categories</div>
      <div><i className="fa-solid fa-gear"></i>Setting</div>
    </div>
    <div>Admin</div>
  </header>
  <main>
    <div className='main-left'>
      <div className='main-left-NewItem'>+ New Item</div>

      <div className='main-left-child'>
        <i className="fa-solid fa-sliders main-left-grandchildren1"></i>
        Dashboard
        <i className="fa-solid fa-caret-up main-left-grandchildren2"></i>
      </div>
      <div className='main-left-child-text'>Commarce</div>
      <div className='main-left-child-text'>Analytics</div>
      <div className='main-left-child-text'>Cyrpto</div>
      <div className='main-left-child-text'>Helpdesk</div>
      <div className='main-left-child-text'>Monitoring</div>
      <div className='main-left-child-text'>Fitnes</div>

      <div className='main-left-child'>
        <i className="fa-solid fa-sliders main-left-grandchildren1"></i>
        Application
        <i className="fa-solid fa-caret-down main-left-grandchildren2"></i>
      </div>
      <div className='main-left-child'>
        <i className="fa-solid fa-sliders main-left-grandchildren1"></i>
        Elements
        <i className="fa-solid fa-caret-down main-left-grandchildren2"></i>
      </div>
      <div className='main-left-child'>
        <i className="fa-solid fa-sliders main-left-grandchildren1"></i>
        Forms
        <i className="fa-solid fa-caret-down main-left-grandchildren2"></i>
      </div>
      <div className='main-left-child'>
        <i className="fa-solid fa-sliders main-left-grandchildren1"></i>
        Plugins
        <i className="fa-solid fa-caret-down main-left-grandchildren2"></i>
      </div>
      <div className='main-left-child'>
        <i className="fa-solid fa-sliders main-left-grandchildren1"></i>
        Elements
        <i className="fa-solid fa-caret-down main-left-grandchildren2"></i>
      </div>
      <div className='main-left-child'>
        <i className="fa-solid fa-sliders main-left-grandchildren1"></i>
        Datagrid
        <i className="fa-solid fa-caret-down main-left-grandchildren2"></i>
      </div>
      <div className='main-left-child'>
        <i className="fa-solid fa-sliders main-left-grandchildren1"></i>
        Settings
        <i className="fa-solid fa-caret-down main-left-grandchildren2"></i>
      </div>
    </div>
    
    <div className='main-right'>
      <div className='main-right-header'>
        <div className='main-right-header-child'>
          <div className='main-right-header-child-text'>Add new post</div>
          <div> + Add Content</div>
          <div><i className="fa-solid fa-gear"></i> Setting</div>
        </div>
        <div className='main-right-header-child2'>
          <input className='main-right-header-child2__input' type="text" placeholder='Search content..'/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className='main-right-bot'>
        <div className='main-right-bot-child'>
          <div><i className="fa-solid fa-cart-shopping"></i></div>
          <div>
            <div>Total Sales</div>
            <div>$2,456</div>
          </div>
        </div>
        <div className='main-right-bot-child'>
          <div><i className="fa-solid fa-cart-shopping"></i></div>
          <div>
            <div>Total Sales</div>
            <div>$3,336</div>
          </div>
        </div>
        <div className='main-right-bot-child'>
          <div><i className="fa-solid fa-cart-shopping"></i></div>
          <div>
            <div>Total Sales</div>
            <div>$5,325</div>
          </div>
        </div>
        <div className='main-right-bot-child'>
          <div><i className="fa-solid fa-cart-shopping"></i></div>
          <div>
            <div>Total Sales</div>
            <div>$1,326</div>
          </div>
        </div>
      </div>
      <div className='main-right-main'>
        <p className='main-right-main-text'>Form title</p>
        Sed tortor, sed velit bhaugydgshfuadshuofdsigyahkaa ádasd.
        <div className='main-right-main-warning'>
          <i className="fa-solid fa-triangle-exclamation"></i> DUNGVPN
        </div>
        <table>
          <thead>
            <tr>
              <td className='text'>Table Title</td>
              <td className='text'>Table Title</td>
              <td className='text'>Table Title</td>
              <td className='text'>Table Title</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>
                <button className='main-right-main-edit'><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                <button className='main-right-main-delete'><i className="fa-solid fa-pen-to-square"></i> Delete</button>
              </td>
            </tr>
            <tr>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>
                <button className='main-right-main-edit'><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                <button className='main-right-main-delete'><i className="fa-solid fa-pen-to-square"></i> Delete</button>
              </td>
            </tr>
            <tr>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>
                <button className='main-right-main-edit'><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                <button className='main-right-main-delete'><i className="fa-solid fa-pen-to-square"></i> Delete</button>
              </td>
            </tr>
            <tr>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>
                <button className='main-right-main-edit'><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                <button className='main-right-main-delete'><i className="fa-solid fa-pen-to-square"></i> Delete</button>
              </td>
            </tr>
            <tr>
              <td>Etiam</td>
              <td>Etiam</td>
              <td>Etiam</td>
              <td>
                <button className='main-right-main-edit'><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                <button className='main-right-main-delete'><i className="fa-solid fa-pen-to-square"></i> Delete</button>
              </td>
            </tr>
            <tr>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>
                <button className='main-right-main-edit'><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                <button className='main-right-main-delete'><i className="fa-solid fa-pen-to-square"></i> Delete</button>
              </td>
            </tr>
            <tr>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>
                <button className='main-right-main-edit'><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                <button className='main-right-main-delete'><i className="fa-solid fa-pen-to-square"></i> Delete</button>
              </td>
            </tr>
            <tr>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>
                <button className='main-right-main-edit'><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                <button className='main-right-main-delete'><i className="fa-solid fa-pen-to-square"></i> Delete</button>
              </td>
            </tr>
            <tr>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>Etiam </td>
              <td>
                <button className='main-right-main-edit'><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                <button className='main-right-main-delete'><i className="fa-solid fa-pen-to-square"></i> Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='main-right-main-number'>
          <div><i className="fa-solid fa-arrow-left"></i></div>
          <div className='main-right-main-number-child'>1</div>
          <div className='main-right-main-number-child main-right-main-number-child2'>2</div>
          <div className='main-right-main-number-child'>3</div>
          <div className='main-right-main-number-child'>4</div>
          <div className='main-right-main-number-child'>5</div>
          <div><i className="fa-solid fa-arrow-right"></i></div>
        </div>  
      </div>
    </div>
    <div>
    </div>
  </main>
</div>
)
}