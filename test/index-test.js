/* global describe, it */

'use strict';

import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Provider from './utils/provider';
import ViewProduct from '../src/client/views/viewProduct';
import * as utils from '../src/client/utils';

describe('Checking Rendering', function () {
  let viewProduct = mount(<Provider><ViewProduct /></Provider>),
      dispatch = viewProduct.find('ViewProduct').first().prop('dispatch');

  before( () => {
    dispatch ({
      type: 'SET_PRODUCT_DATA',
      payload: {
        "name":"Campus Sutra Casual 3/4th Sleeve Solid Women's Orange Top ",
        "description":"Showcase your Style with this Awesome Raglan top in a realistic, professional and faster way",
        "brand":"Campus Sutra Casual 3/4th Sleeve Solid Women's Orange Top ",
        "availability":2,
        "url":"https://rukminim1.flixcart.com/image/832/832/top/v/6/k/ss16mel-rgqs-w-pln-brph-campus-sutra-s-original-imaez5ndwnyftkhb.jpeg?q=70",
        "price":598,
        "category":"clothing",
        "_id":"58d0052bf7eaaa2f1cac00ac"
      }
    });
  })
  it('Component is rendered', function () {
    expect(viewProduct.find('.page-header').length).toEqual(1);
  });

  it('Validate Proper Product name', function () {
    expect(viewProduct.find('.page-header').text()).toEqual("Campus Sutra Casual 3/4th Sleeve Solid Women's Orange Top ");
  });

  it('Validate Wrong Product name', function () {
    expect(viewProduct.find('.page-header').text()).toNotEqual("Campus Sutra Casual");
  });

  it('Validate Image Holder', function () {
    expect(viewProduct.find('.img-holder').length).toEqual(1);
  });

  it('Validate Tag Status', function () {
    expect(viewProduct.find('.tag').text()).toEqual(utils.inStock);
  });

  it('Validate Rupee Sign', function () {
    expect(viewProduct.find('.rupee-sign').text()).toNotEqual('&#x20B9;');
  });

  it('Validate Back Button', function () {
    expect(viewProduct.find('.btn-default').text()).toEqual('Back');
  });

  it('Validate Edit Button', function () {
    expect(viewProduct.find('.btn-primary').text()).toEqual('Edit Product');
  });

  it('Validate Delete Button', function () {
    expect(viewProduct.find('.btn-danger').text()).toEqual('Delete');
  });

});
