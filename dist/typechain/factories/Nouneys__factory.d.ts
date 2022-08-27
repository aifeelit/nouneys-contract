import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Nouneys, NouneysInterface } from "../Nouneys";
export declare class Nouneys__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(price_: BigNumberish, treasury_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Nouneys>;
    getDeployTransaction(price_: BigNumberish, treasury_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Nouneys;
    connect(signer: Signer): Nouneys__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620024aa380380620024aa833981016040819052620000349162000126565b6040805180820182526007808252664e6f756e65797360c81b60208084018290528451808601909552918452908301529060026200007383826200020a565b5060036200008282826200020a565b50506001600055506200009533620000d4565b600b91909155600c80546001600160a01b03909216620100000262010000600160b01b0319909216919091179055600a805461ffff19169055620002d6565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600080604083850312156200013a57600080fd5b825160208401519092506001600160a01b03811681146200015a57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200019057607f821691505b602082108103620001b157634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200020557600081815260208120601f850160051c81016020861015620001e05750805b601f850160051c820191505b818110156200020157828155600101620001ec565b5050505b505050565b81516001600160401b0381111562000226576200022662000165565b6200023e816200023784546200017b565b84620001b7565b602080601f8311600181146200027657600084156200025d5750858301515b600019600386901b1c1916600185901b17855562000201565b600085815260208120601f198616915b82811015620002a75788860151825594840194600190910190840162000286565b5085821015620002c65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6121c480620002e66000396000f3fe60806040526004361061027d5760003560e01c80636352211e1161014f578063b07ca5fc116100c1578063c944ec841161007a578063c944ec84146107c4578063d4f24e75146107e4578063da41bfe11461080f578063e985e9c514610822578063f0f442601461086b578063f2fde38b1461088b57600080fd5b8063b07ca5fc146106fc578063b658b60f1461071c578063b75d9e751461073c578063b88d4fde14610769578063c50b0fb014610789578063c87b56dd146107a457600080fd5b80638da5cb5b116101135780638da5cb5b1461064257806391b7f5ed1461066057806395d89b4114610680578063a035b1fe14610695578063a22cb465146106ab578063a9756a3d146106cb57600080fd5b80636352211e146105c257806370a08231146105e2578063715018a614610602578063854496971461061757806389b0649b1461062d57600080fd5b806332bed766116101f357806353d75727116101ac57806353d75727146104d457806355b9c33c1461051857806355f804b314610543578063564566a81461056357806360d938dc1461058257806361d027b31461059c57600080fd5b806332bed7661461040f5780633ccfd60b1461042f57806340c10f191461044457806342842e0e146104645780634c0f38c2146104845780634f3e1efc146104ac57600080fd5b806318160ddd1161024557806318160ddd1461035357806323b872dd1461037a57806323cf0a221461039a5780632866b0cd146103ad5780632d55dddd146103cd5780633100a535146103fa57600080fd5b806301ffc9a71461028257806306421c2f146102b757806306fdde03146102d9578063081812fc146102fb578063095ea7b314610333575b600080fd5b34801561028e57600080fd5b506102a261029d366004611b0e565b6108ab565b60405190151581526020015b60405180910390f35b3480156102c357600080fd5b506102d76102d2366004611b42565b6108fd565b005b3480156102e557600080fd5b506102ee610922565b6040516102ae9190611bb5565b34801561030757600080fd5b5061031b610316366004611bc8565b6109b4565b6040516001600160a01b0390911681526020016102ae565b34801561033f57600080fd5b506102d761034e366004611bf8565b6109f8565b34801561035f57600080fd5b5060015460005403600019015b6040519081526020016102ae565b34801561038657600080fd5b506102d7610395366004611c22565b610a98565b6102d76103a8366004611b42565b610c31565b3480156103b957600080fd5b506102d76103c8366004611b42565b610e32565b3480156103d957600080fd5b5061036c6103e8366004611b42565b60116020526000908152604090205481565b34801561040657600080fd5b506102d7610e63565b34801561041b57600080fd5b506102d761042a366004611b42565b610e88565b34801561043b57600080fd5b506102d7610ea8565b34801561045057600080fd5b506102d761045f366004611bf8565b610efe565b34801561047057600080fd5b506102d761047f366004611c22565b610f14565b34801561049057600080fd5b50600c5461ffff1660009081526010602052604090205461036c565b3480156104b857600080fd5b50600c5461ffff1660009081526011602052604090205461036c565b3480156104e057600080fd5b506105056104ef366004611b42565b600f6020526000908152604090205461ffff1681565b60405161ffff90911681526020016102ae565b34801561052457600080fd5b50600c5461ffff9081166000908152600f602052604090205416610505565b34801561054f57600080fd5b506102d761055e366004611cea565b610f34565b34801561056f57600080fd5b50600a546102a290610100900460ff1681565b34801561058e57600080fd5b50600a546102a29060ff1681565b3480156105a857600080fd5b50600c5461031b906201000090046001600160a01b031681565b3480156105ce57600080fd5b5061031b6105dd366004611bc8565b610f48565b3480156105ee57600080fd5b5061036c6105fd366004611d33565b610f53565b34801561060e57600080fd5b506102d7610fa2565b34801561062357600080fd5b5061036c60095481565b34801561063957600080fd5b506102d7610fb6565b34801561064e57600080fd5b506008546001600160a01b031661031b565b34801561066c57600080fd5b506102d761067b366004611bc8565b610fd2565b34801561068c57600080fd5b506102ee610fdf565b3480156106a157600080fd5b5061036c600b5481565b3480156106b757600080fd5b506102d76106c6366004611d4e565b610fee565b3480156106d757600080fd5b506105056106e6366004611b42565b600e6020526000908152604090205461ffff1681565b34801561070857600080fd5b506102d7610717366004611b42565b611083565b34801561072857600080fd5b506102d7610737366004611bc8565b6110b4565b34801561074857600080fd5b5061036c610757366004611b42565b60106020526000908152604090205481565b34801561077557600080fd5b506102d7610784366004611d8a565b6110c1565b34801561079557600080fd5b50600c546105059061ffff1681565b3480156107b057600080fd5b506102ee6107bf366004611bc8565b61110b565b3480156107d057600080fd5b506102a26107df366004611e52565b61118f565b3480156107f057600080fd5b50600c5461ffff9081166000908152600e602052604090205416610505565b6102d761081d366004611ea6565b611210565b34801561082e57600080fd5b506102a261083d366004611ef9565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b34801561087757600080fd5b506102d7610886366004611d33565b6114a1565b34801561089757600080fd5b506102d76108a6366004611d33565b6114d3565b60006301ffc9a760e01b6001600160e01b0319831614806108dc57506380ac58cd60e01b6001600160e01b03198316145b806108f75750635b5e139f60e01b6001600160e01b03198316145b92915050565b610905611549565b600c5461ffff908116600090815260106020526040902091169055565b60606002805461093190611f2c565b80601f016020809104026020016040519081016040528092919081815260200182805461095d90611f2c565b80156109aa5780601f1061097f576101008083540402835291602001916109aa565b820191906000526020600020905b81548152906001019060200180831161098d57829003601f168201915b5050505050905090565b60006109bf826115a3565b6109dc576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b6000610a0382610f48565b9050336001600160a01b03821614610a3c57610a1f813361083d565b610a3c576040516367d9dca160e11b815260040160405180910390fd5b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6000610aa3826115d8565b9050836001600160a01b0316816001600160a01b031614610ad65760405162a1148160e81b815260040160405180910390fd5b60008281526006602052604090208054338082146001600160a01b03881690911417610b2357610b06863361083d565b610b2357604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b038516610b4a57604051633a954ecd60e21b815260040160405180910390fd5b8015610b5557600082555b6001600160a01b038681166000908152600560205260408082208054600019019055918716808252919020805460010190554260a01b17600160e11b17600085815260046020526040812091909155600160e11b84169003610be757600184016000818152600460205260408120549003610be5576000548114610be55760008181526004602052604090208490555b505b83856001600160a01b0316876001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b505050505050565b600a54610100900460ff16610c7f5760405162461bcd60e51b815260206004820152600f60248201526e53616c65204e6f742041637469766560881b60448201526064015b60405180910390fd5b8061ffff16600b54610c919190611f7c565b341015610cd25760405162461bcd60e51b815260206004820152600f60248201526e496e636f72726563742056616c756560881b6044820152606401610c76565b600c5461ffff908116600090815260116020526040902054610cf691831690611f9b565b600c5461ffff166000908152601060205260409020541015610d505760405162461bcd60e51b815260206004820152601360248201527213585e0814dd5c1c1b1e48115e18d959591959606a1b6044820152606401610c76565b600c5461ffff9081166000908152601360209081526040808320338452909152902054610d7f91839116611fb3565b600c5461ffff9081166000908152600f602052604090205491811691161015610dd75760405162461bcd60e51b815260206004820152600a60248201526913585e08135a5b9d195960b21b6044820152606401610c76565b600c805461ffff908116600090815260136020908152604080832033808552908352818420805461ffff198116908716890187161790559454841683526011909152902080549184169182019055610e2f9190611647565b50565b610e3a611549565b600c5461ffff9081166000908152600f6020526040902080549190921661ffff19909116179055565b610e6b611549565b600a805461ff001981166101009182900460ff1615909102179055565b610e90611549565b600c805461ffff191661ffff92909216919091179055565b4780610ee25760405162461bcd60e51b8152602060048201526009602482015268302062616c616e636560b81b6044820152606401610c76565b600c54610e2f906201000090046001600160a01b031682611745565b610f06611549565b610f10828261185e565b5050565b610f2f838383604051806020016040528060008152506110c1565b505050565b610f3c611549565b600d610f10828261201f565b60006108f7826115d8565b60006001600160a01b038216610f7c576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b610faa611549565b610fb46000611878565b565b610fbe611549565b600a805460ff19811660ff90911615179055565b610fda611549565b600b55565b60606003805461093190611f2c565b336001600160a01b038316036110175760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61108b611549565b600c5461ffff9081166000908152600e6020526040902080549190921661ffff19909116179055565b6110bc611549565b600955565b6110cc848484610a98565b6001600160a01b0383163b15611105576110e8848484846118ca565b611105576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b6060611116826115a3565b61113357604051630a14c4b560e41b815260040160405180910390fd5b600061113d6119b5565b9050805160000361115d5760405180602001604052806000815250611188565b80611167846119c4565b6040516020016111789291906120df565b6040516020818303038152906040525b9392505050565b6000611208848480806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506009546040516bffffffffffffffffffffffff19606089901b16602082015290925060340190505b604051602081830303815290604052805190602001206119fc565b949350505050565b600a5460ff166112575760405162461bcd60e51b815260206004820152601260248201527150726573616c65204e6f742041637469766560701b6044820152606401610c76565b8261ffff16600b546112699190611f7c565b3410156112aa5760405162461bcd60e51b815260206004820152600f60248201526e496e636f72726563742056616c756560881b6044820152606401610c76565b600c5461ffff9081166000908152601160205260409020546112ce91851690611f9b565b600c5461ffff1660009081526010602052604090205410156113285760405162461bcd60e51b815260206004820152601360248201527213585e0814dd5c1c1b1e48115e18d959591959606a1b6044820152606401610c76565b600c5461ffff908116600090815260126020908152604080832033845290915290205461135791859116611fb3565b600c5461ffff9081166000908152600e6020526040902054918116911610156113af5760405162461bcd60e51b815260206004820152600a60248201526913585e08135a5b9d195960b21b6044820152606401610c76565b61140e828280806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506009546040516bffffffffffffffffffffffff193360601b16602082015290925060340190506111ed565b6114495760405162461bcd60e51b815260206004820152600c60248201526b4e6f7420456c696769626c6560a01b6044820152606401610c76565b600c805461ffff908116600090815260126020908152604080832033808552908352818420805461ffff1981169087168b0187161790559454841683526011909152902080549186169182019055610f2f9190611647565b6114a9611549565b600c80546001600160a01b03909216620100000262010000600160b01b0319909216919091179055565b6114db611549565b6001600160a01b0381166115405760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610c76565b610e2f81611878565b6008546001600160a01b03163314610fb45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610c76565b6000816001111580156115b7575060005482105b80156108f7575050600090815260046020526040902054600160e01b161590565b6000818060011161162e5760005481101561162e5760008181526004602052604081205490600160e01b8216900361162c575b8060000361118857506000190160008181526004602052604090205461160b565b505b604051636f96cda160e11b815260040160405180910390fd5b600080549082900361166c5760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b03831660008181526005602090815260408083208054680100000000000000018802019055848352600490915281206001851460e11b4260a01b178317905582840190839083907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8180a4600183015b81811461171b57808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a46001016116e3565b508160000361173c57604051622e076360e81b815260040160405180910390fd5b60005550505050565b804710156117955760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610c76565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146117e2576040519150601f19603f3d011682016040523d82523d6000602084013e6117e7565b606091505b5050905080610f2f5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610c76565b610f10828260405180602001604052806000815250611a12565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a02906118ff903390899088908890600401612105565b6020604051808303816000875af192505050801561193a575060408051601f3d908101601f1916820190925261193791810190612142565b60015b611998573d808015611968576040519150601f19603f3d011682016040523d82523d6000602084013e61196d565b606091505b508051600003611990576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b6060600d805461093190611f2c565b604080516080019081905280825b600183039250600a81066030018353600a9004806119d25750819003601f19909101908152919050565b600082611a098584611a7f565b14949350505050565b611a1c8383611647565b6001600160a01b0383163b15610f2f576000548281035b611a4660008683806001019450866118ca565b611a63576040516368d2bf6b60e11b815260040160405180910390fd5b818110611a33578160005414611a7857600080fd5b5050505050565b600081815b8451811015611ac457611ab082868381518110611aa357611aa361215f565b6020026020010151611acc565b915080611abc81612175565b915050611a84565b509392505050565b6000818310611ae8576000828152602084905260409020611188565b5060009182526020526040902090565b6001600160e01b031981168114610e2f57600080fd5b600060208284031215611b2057600080fd5b813561118881611af8565b803561ffff81168114611b3d57600080fd5b919050565b600060208284031215611b5457600080fd5b61118882611b2b565b60005b83811015611b78578181015183820152602001611b60565b838111156111055750506000910152565b60008151808452611ba1816020860160208601611b5d565b601f01601f19169290920160200192915050565b6020815260006111886020830184611b89565b600060208284031215611bda57600080fd5b5035919050565b80356001600160a01b0381168114611b3d57600080fd5b60008060408385031215611c0b57600080fd5b611c1483611be1565b946020939093013593505050565b600080600060608486031215611c3757600080fd5b611c4084611be1565b9250611c4e60208501611be1565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611c8f57611c8f611c5e565b604051601f8501601f19908116603f01168101908282118183101715611cb757611cb7611c5e565b81604052809350858152868686011115611cd057600080fd5b858560208301376000602087830101525050509392505050565b600060208284031215611cfc57600080fd5b813567ffffffffffffffff811115611d1357600080fd5b8201601f81018413611d2457600080fd5b61120884823560208401611c74565b600060208284031215611d4557600080fd5b61118882611be1565b60008060408385031215611d6157600080fd5b611d6a83611be1565b915060208301358015158114611d7f57600080fd5b809150509250929050565b60008060008060808587031215611da057600080fd5b611da985611be1565b9350611db760208601611be1565b925060408501359150606085013567ffffffffffffffff811115611dda57600080fd5b8501601f81018713611deb57600080fd5b611dfa87823560208401611c74565b91505092959194509250565b60008083601f840112611e1857600080fd5b50813567ffffffffffffffff811115611e3057600080fd5b6020830191508360208260051b8501011115611e4b57600080fd5b9250929050565b600080600060408486031215611e6757600080fd5b833567ffffffffffffffff811115611e7e57600080fd5b611e8a86828701611e06565b9094509250611e9d905060208501611be1565b90509250925092565b600080600060408486031215611ebb57600080fd5b611ec484611b2b565b9250602084013567ffffffffffffffff811115611ee057600080fd5b611eec86828701611e06565b9497909650939450505050565b60008060408385031215611f0c57600080fd5b611f1583611be1565b9150611f2360208401611be1565b90509250929050565b600181811c90821680611f4057607f821691505b602082108103611f6057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611f9657611f96611f66565b500290565b60008219821115611fae57611fae611f66565b500190565b600061ffff808316818516808303821115611fd057611fd0611f66565b01949350505050565b601f821115610f2f57600081815260208120601f850160051c810160208610156120005750805b601f850160051c820191505b81811015610c295782815560010161200c565b815167ffffffffffffffff81111561203957612039611c5e565b61204d816120478454611f2c565b84611fd9565b602080601f831160018114612082576000841561206a5750858301515b600019600386901b1c1916600185901b178555610c29565b600085815260208120601f198616915b828110156120b157888601518255948401946001909101908401612092565b50858210156120cf5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600083516120f1818460208801611b5d565b835190830190611fd0818360208801611b5d565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061213890830184611b89565b9695505050505050565b60006020828403121561215457600080fd5b815161118881611af8565b634e487b7160e01b600052603260045260246000fd5b60006001820161218757612187611f66565b506001019056fea2646970667358221220381bc17e7419781efd382a01b234716532ddd5cc00841e55d988d75db72bc0cf64736f6c634300080f0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): NouneysInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Nouneys;
}