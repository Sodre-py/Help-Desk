import style from './Header.module.css'
import Messi from '../../assets/messi.jpg'
import { LogOut, Search, Settings } from 'lucide-react'
import { X } from 'lucide-react';

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";

export function Header () {
    return(
            <div className={style.header}>
                <div className={style.pesquisar}>
                    <Search size={50}/>
                    <input type="search" placeholder='Pesquisar...' />
                </div>
                <div className={style.headerright}>
                
                    
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                    <button className={style.button}>Novo Chamado</button>
                    </Dialog.Trigger>
                    
                    <Dialog.Portal>
                        
                    <Dialog.Overlay className={style.DialogOverlay}/>
                    <Dialog.Content className={style.DialogContent}>
                        <div className={style.headerModal}>    
                            <Dialog.Title>Novo Chamado</Dialog.Title>
                            <Dialog.Close className={style.DialogClose}>
                            <X />
			                </Dialog.Close>
                        </div>
                        <Form.Root className={style.FormRoot}>
                           
                            <Form.Field className={style.FormField} name="question">
			<div  className={style.form}>
				<Form.Label className={style.FormLabel}>Assunto</Form.Label>
				<Form.Message className={style.FormMessage} match="valueMissing">
					Please enter a question
				</Form.Message>
			</div>
			<Form.Control asChild>
				<textarea className={style.Textarea} required />
			</Form.Control>
		</Form.Field>
        <Form.Field className={style.FormField} name="question">
			<div  className={style.form}>
				<Form.Label className={style.FormLabel}>Descrição</Form.Label>
				<Form.Message className={style.FormMessage} match="valueMissing">
					Please enter a question
				</Form.Message>
			</div>
			<Form.Control asChild>
				<textarea className={style.Textarea_description} required />
			</Form.Control>
		</Form.Field>
        <Form.Field className={style.FormField} name="question">
			<div  className={style.form}>
				<Form.Label className={style.FormLabel}>Anexo</Form.Label>
				<Form.Message className={style.FormMessage} match="valueMissing">
					Please enter a question
				</Form.Message>
			</div>
			<Form.Control asChild>
				<textarea className={style.Textarea} required />
			</Form.Control>
		</Form.Field>
        <Form.Field className={style.FormField} name="question">
			<div  className={style.form}>
				<Form.Label className={style.FormLabel}>Contato telefone</Form.Label>
				<Form.Message className={style.FormMessage} match="valueMissing">
					Please enter a question
				</Form.Message>
			</div>
			<Form.Control asChild>
				<textarea className={style.Textarea} required />
			</Form.Control>
		</Form.Field>
         <Form.Field className={style.FormField} name="email">
                            <div className={style.form}>
                                <Form.Label className={style.FormLabel}>Email</Form.Label>
                                <Form.Message className={style.FormMessage} match="valueMissing">Please enter your email</Form.Message>
                                <Form.Message className={style.FormMessage} match="typeMismatch">Please provide a valid emaiL</Form.Message>
                            </div>
                            <Form.Control asChild>
				                <input className={style.Input} type="email" required />
			                </Form.Control>
                            </Form.Field>
		<Form.Submit asChild>
			<button className={style.Button} style={{ marginTop: 10 }}>
				Enviar
			</button>
		</Form.Submit>
                        </Form.Root>
                    </Dialog.Content>
                    </Dialog.Portal>
                    

                </Dialog.Root>

                
                    <div className={style.clientName}>
                        <aside>Lionel Messi</aside>
                        <strong>Cliente</strong>
                    </div>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<div className={style.Button_profile}>
								<img src={Messi} />
								
							</div>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content className={style.DropdownMenuContent}>
							<DropdownMenu.Item> 
								<div class={style.username}>Neymar Jr</div>
								<div class={style.email}>ney.jr@atheros.ai</div>
							</DropdownMenu.Item>
							<DropdownMenu.Separator className={style.DropdownMenuSeparator} />
							<DropdownMenu.Item >
							<li>
                        		<img className= {style.MyProfile}src={Messi} /> Meu perfil
                    		</li>
							</DropdownMenu.Item>
							
							<DropdownMenu.Item >
							<li>
                        		<Settings className={style.icons} /> Configurações
                    		</li>
							</DropdownMenu.Item>
							<DropdownMenu.Separator className={style.DropdownMenuSeparator} />
							<DropdownMenu.Sub>
							<DropdownMenu.SubTrigger>
							<li className={style.LogOut}>
                        		<LogOut className={style.icons}/> Log out
                    		</li>
							</DropdownMenu.SubTrigger>
							</DropdownMenu.Sub>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
                </div>
            </div>
    )
}