import { LoginForm } from '@/components/AuthForms/LoginForm';

import classes from './pages.module.css';
import { useState } from 'react';
import { Modal } from '@/components/UI/Modal/Modal';

export const LoginPage = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const onToggleIsOpen = () => setIsOpen((prev) => !prev);

	return (
		<div className={`${classes.page} ${classes.pageCentered}`}>
			<LoginForm />
			<button onClick={onToggleIsOpen}>toggle</button>
			<Modal isOpen={isOpen} onClose={onToggleIsOpen}>
				<div>
					<h1>Modal header</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae adipisci sunt repudiandae magnam, omnis qui quia quae veniam consequatur quam obcaecati cum quaerat ex, corrupti dolores! Quis, aliquid a?</p>
					<div>
						
						<h3>footer</h3>
						<div>
							<button>submit</button>
							<button>cancel</button>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default LoginPage;
