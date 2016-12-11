// Copyright 2015, 2016 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import { createAction } from 'redux-actions';

export const error = createAction('error');
export const updateHashrate = createAction('update hashrate');
export const updateBlockNumber = createAction('update blockNumber');
export const updateVersion = createAction('update version');
export const updatePeerCount = createAction('update peerCount');
export const updateNetPeers = createAction('update netPeers');
export const updateNetChain = createAction('update netChain');
export const updateNetPort = createAction('update netPort');
export const updateRpcSettings = createAction('update rpcSettings');
export const updateNodeName = createAction('update nodeName');
export const updateAccounts = createAction('update accounts');
