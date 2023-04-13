import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export const getStyles = (windowWidth) =>
	StyleSheet.create({
		bigScreen: {
			marginVertical: 50,
			padding: 15,
			width: windowWidth * 0.4,
		},
		smallScreen: {
			marginVertical: 50,
			padding: 15,
			width: windowWidth * 0.9,
		},
	});
export const getRating = () => {
	return [
		{
			label: '1',
			value: '1',
			disabled: true,
		},
		{
			label: '2',
			value: '2',
			disabled: false,
		},
		{
			label: '3',
			value: '3',
			disabled: false,
		},
		{
			label: '4',
			value: '4',
			disabled: false,
		},
		{
			label: '5',
			value: '5',
		},
		{
			label: '6',
			value: '6',
		},
		{
			label: '7',
			value: '7',
		},
		{
			label: '8',
			value: '8',
		},
		{
			label: '9',
			value: '9',
		},
		{
			label: '10',
			value: '10',
		},
		{
			label: '11',
			value: '11',
		},
		{
			label: '12',
			value: '12',
		},
		{
			label: '13',
			value: '13',
		},
		{
			label: '14',
			value: '14',
		},
		{
			label: '15',
			value: '15',
		},
		{
			label: '16',
			value: '16',
		},
	];
};
